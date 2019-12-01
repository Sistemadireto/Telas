import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, startWith } from 'rxjs/operators';
import { BLOB_STORAGE_TOKEN, IBlobService, IBlobStorage, ISasToken } from './azureStorage';

@Injectable()
export class BlobStorageService {
  constructor(@Inject(BLOB_STORAGE_TOKEN) private blobStorage: IBlobStorage) { }

  public uploadToBlobStorage(sasToken: ISasToken, file: File): Observable<number> {
    const customBlockSize = this.getBlockSize(file);
    const options = { blockSize: customBlockSize };
    const blobService = this.blobStorage
      .createBlobServiceWithSas(sasToken.storageUri, sasToken.storageAccessToken)
      .withFilter(new this.blobStorage.ExponentialRetryPolicyFilter()); ;

    blobService.singleBlobPutThresholdInBytes = customBlockSize;

    return this.uploadFile(blobService, sasToken, file, options);
  }

  private uploadFile(blobService: IBlobService, accessToken: ISasToken, file: File, options: { blockSize: number }
  ): Observable<number> {
    return new Observable<number>(observer => {
      const speedSummary = blobService.createBlockBlobFromBrowserFile(
        accessToken.container,
        accessToken.filename,
        file,
        options,
        error => {
          if (error) {
            observer.error(error);
          } else {
            observer.next(100);
            observer.complete();
          }
        }
      );
      speedSummary.on('progress', () => {
        const progress = parseInt(speedSummary.getCompletePercent(2), 10);
        observer.next(progress === 100 ? 99 : progress);
      });
    }).pipe(
      startWith(0),
      distinctUntilChanged()
    );
  }

  private getBlockSize(file: File): number {
    const size32Mb = 1024 * 1024 * 32;
    const size4Mb = 1024 * 1024 * 4;
    const size512Kb = 1024 * 512;

    return file.size > size32Mb ? size4Mb : size512Kb;
  }
}

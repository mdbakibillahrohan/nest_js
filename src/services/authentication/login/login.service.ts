import { Inject, Injectable } from '@nestjs/common';
import { Photo } from 'src/models/photos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  async getAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}

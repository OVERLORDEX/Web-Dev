import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe((data: Photo[]) => this.photos = data);
  }

  back() {
    this.route.snapshot.paramMap.get('id');
    window.history.back();
  }
}
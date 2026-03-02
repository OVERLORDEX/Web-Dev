import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="photos.length === 0">Loading photos...</div>
    <div class="grid">
      <div *ngFor="let p of photos">
        <img [src]="p.thumbnailUrl" [alt]="p.title" />
        <p>{{ p.title }}</p>
      </div>
    </div>
    <button (click)="back()">Back</button>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, 150px);
      gap: 10px;
    }
    img {
      width: 100%;
      display: block;
    }
  `]
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
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div *ngIf="album">
      <h2>Album {{ album.id }}</h2>
      <p>User ID: {{ album.userId }}</p>
      <input [(ngModel)]="album.title" />
      <button (click)="save()">Save</button>
      <button (click)="back()">Back</button>
      <button (click)="viewPhotos()">View Photos</button>
    </div>
  `
})
export class AlbumDetail implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe((a: Album) => this.album = a);
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Album updated!');
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
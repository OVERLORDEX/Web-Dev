import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="loading">Loading albums...</div>
    <ul *ngIf="!loading">
      <li *ngFor="let album of albums">
        {{ album.id }} - {{ album.title }}
        <button (click)="deleteAlbum(album.id)">Delete</button>
        <a [routerLink]="['/albums', album.id]">View Details</a>
      </li>
    </ul>
  `
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
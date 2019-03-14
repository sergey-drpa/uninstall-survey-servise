import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FsService } from '../fs.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  displayedColumns = ['title', 'description', 'author'];
  dataSource = new BoardDataSource(this.fs);

  /* Autocomplete */
  myControl = new FormControl();
  options: string[] = ['one', 'two'];
  filteredOptions: Observable<string[]>;

  constructor(private fs: FsService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges// .subscribe(value => {

    // });
      .pipe(
        startWith(''),
        map(value => { return this._filter(value); })
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
    //return this.fs.queryBoards(value);
  }

}

export class BoardDataSource extends DataSource<any> {

  constructor(private fs: FsService) {
    super();
  }

  connect() {
    return this.fs.getBoards();
  }

  disconnect() {

  }
}

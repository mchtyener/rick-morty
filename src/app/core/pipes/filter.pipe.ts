import {Pipe, PipeTransform} from '@angular/core';
import {RickyAndMorty} from "../model/rick-and-morty.model";
import {filter, from} from "rxjs";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: RickyAndMorty[], filterCriteria: any) {
    if (!items || !filterCriteria) {
      return items;
    }

    const filteredItems: RickyAndMorty[] = [];

    from(items).pipe(
      filter((item: RickyAndMorty) => {
        const genderMatch = !filterCriteria.gender || item.gender === filterCriteria.gender;
        const typeMatch = !filterCriteria.type || item.type === filterCriteria.type;
        const nameMatch = !filterCriteria.name || item.name.includes(filterCriteria.name);
        const statusMatch = !filterCriteria.status || item.status === filterCriteria.status;

        return genderMatch && typeMatch && nameMatch && statusMatch;
      })
    ).subscribe((filteredItem: RickyAndMorty) => {
      filteredItems.push(filteredItem);
    });

    return filteredItems;
  }
}

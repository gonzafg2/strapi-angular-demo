import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-strapi';
  texts = {
    title: '',
    subtitle: '',
  }

  async ngOnInit() {
    const config = {
      headers: {
        Authorization:
          'Bearer ' +
          '505e71f18ae72f4c18733cd1e6e3ca48e5b5eb92428a31021df669cc7621ce60693f2c5125481937e231af9b32138099d9e0bf8d7064c6b2c7579ef3585c5ee8c5fba544fc74d8e795f178c4a98c5e04392b1f8bf7f90488e4ff0663f62a46786fb72a4631b1a869a29e3a7c54f7c6ba0d407292d09103913447635d6c5a32bb',
      },
    };
    try {
      const response = await axios.get('http://localhost:1337/api/homes', config);
      const dataRaw = response.data;
      console.log(dataRaw);

      const attributes = dataRaw.data[0].attributes;
      this.texts = {
        title: attributes.title,
        subtitle: attributes.subtitle,
      };
      //console.log(this.texts);
    } catch (error) {
      console.log(error);
    }
  }
}



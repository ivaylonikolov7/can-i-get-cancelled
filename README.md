<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
        <a href="#installation">Installation</a>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://canigetcancelled.com)

This app should save you from the angry twitter users for saying something controversial but dont rely on it. Its still a work in progress. If you have any ideas that might contribute to it feel free to make it better. 

So how does it work? 

-It basically checks if you have said offensive words in your twitter from a big list with non pc words (the list is located in `server/utils/profanity.js`).  

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [React.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

If you want to run it locally this is how you do it:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get your bearer token from [https://developer.twitter.com/en/docs](https://developer.twitter.com/en/docs)
2. Make a MongoDB Atlas account and find your connection string
2. Clone the repo
   ```sh
   git clone https://github.com/ivaylonikolov7/can-i-get-cancelled.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `server_secrets.js` file with the following structure: 
   ```js
   module.exports = {
        MONGODB_CONNECTION_STRING: 'YOUR MONGODB CONNECTION STRING',
        BEARER_TOKEN: 'YOUR TWITTER API BEARER TOKEN'
    }
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ivaylo Nikolov - [@IvayloWasTaken](https://twitter.com/IvayloWasTaken) - me@ivaylo.codes

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.jpg
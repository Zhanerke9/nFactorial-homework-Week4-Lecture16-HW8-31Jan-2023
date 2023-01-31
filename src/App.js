import './style.css';

function App() {
  return (
    <div className="App">
      <header className="header1">
      <p className="header1-text">medium alike</p>
    </header>
    <header className="header2">
      <p className="header2-text">Hello, world!</p>
    </header>
    <main>
      <div id="articless">
        {/* <!-- <div className="class-articles">
          <div className="div-right">
            <div className="article-Topic">
              <img src="./images/authorPhoto.png" alt="AuthorPhoto">&nbsp;
              <p className="main-AuthorsName">Authors name&nbsp;</p>
              <p1 className="word-IN">in</p1>
              <p2 className="main-Author-Topic"
                >&nbsp;Topics Name&nbsp; &middot; &nbsp;</p2
              >
              <p3 className="date">7 july</p3>
            </div>
            <a href="./scndPage.html">
            <div className="article-content">
              <p className="article-Title"></p>
              <p className="article-Text"></p>
            </div>
          </a>
            <div className="articleBottom-Info">
              <div className="article-Topic">
                <button className="button-JS"> <p className="Article-Bottom-about">Java Script</p></button>
                <p className="minsToRead">&nbsp;12 min to read&nbsp; &middot; &nbsp;</p>
                <p className="word-IN">Selected for you</p>
              </div>
              <div className="greyIcons">
                <img src="./images/Icon.png" alt="icon">
                <img src="./images/Icon.png" alt="icon">
                <img src="./images/Icon.png" alt="icon">
              </div>
            </div>
          </div>
          <img className="article-Image" src="" alt="img" />
          <hr>
          </div> --> */}
      </div>
    </main>
    <footer className="footer">
      <div className="footer-links">
        <p className="footer-links-Text">
          Credits: photos from&nbsp;<a href="https://unsplash.com/@surface"
            >Unsplash.com</a
          >, icons from&nbsp;<a href="https://icons8.com/">Icons8</a>, graphics
          from&nbsp;<a
            href="https://craftwork.design/checkout/purchase-confirmation/?payment_key=a3ba0d28aa30dfd691cd535acb1f4228"
            >craftwork.design</a
          >.
        </p>
      </div>

      <div className="footer-MenuLast">
        <p className="footer-nFactorial">
          Made with ✨&#x1F5A4; at nFactorial in 2022.
        </p>
      </div>
    </footer>
    </div>
  );
}

export default App;

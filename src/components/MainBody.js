import '../style.css';
import pic1 from './images/authorPhoto.png';
import Arr from './data/data';
import icon from './images/Icon.png';

function Mainb() {
  return (
    <main>
        {Arr.map((item)=> (<div id="articless">
        <div className="class-articles">
            <div className="div-right">
              <div className="article-Topic">
                <img src={pic1} alt="AuthorPhoto" />&nbsp;
                <p className="main-AuthorsName">{item.Author}&nbsp;</p>
                <p className="word-IN">in</p>
                <p className="main-Author-Topic"
                  >&nbsp;{item.area}&nbsp; &middot; &nbsp;</p>
                <p className="date">{item.date}</p>
              </div>
              <a href="./scndPage.html">
              <div className="article-content">
                <p className="article-Title">{item.title}</p>
                <p className="article-Text">{item.topic}</p>
              </div>
            </a>
              <div className="articleBottom-Info">
                <div className="article-Topic">
                  <button className="button-JS"> <p className="Article-Bottom-about">{item.area}</p></button>
                  <p className="minsToRead">&nbsp;12 min to read&nbsp; &middot; &nbsp;</p>
                  <p className="word-IN">Selected for you</p>
                </div>
                <div className="greyIcons">
                  <img src={icon} alt="icon" />
                  <img src={icon} alt="icon" />
                  <img src={icon} alt="icon" />
                </div>
              </div>
            </div>
            <img className="article-Image" src={item.image} alt="img" />
            </div>
            <hr />
            </div>
            ))}


    </main>
  )
}

export default Mainb;

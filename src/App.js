import './App.css';
import './components/SimpsonsInfo/SimpsonsInfo.css';
import {SimpsonsInfo} from "./components/SimpsonsInfo/SimpsonsInfo.js";

const App = () => {
    return (
        <div className="App">
            <SimpsonsInfo personName={'Homer Simpson'}
                          picture={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
                          description={'Homer Jay Simpson (born May 12, 1956)[40] is a man from Springfield. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds)[41], lazy, and often ignorant to the world around him.'}/>
            <SimpsonsInfo personName={'Bart Simpson'}
                          picture={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
                          description={'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980)[7]is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'}/>
            <SimpsonsInfo personName={'Marge Simpson'}
                          picture={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
                          description={'Marjorie Jacqueline "Marge" Simpson (née Bouvier)[11] is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series.'}/>
            <SimpsonsInfo personName={'Lisa Simpson'}
                          picture={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
                          description={'Lisa Marie Simpson (born May 9, 1983)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}/>
            <SimpsonsInfo personName={'Maggie Simpson'}
                          picture={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
                          description={'Margaret Evelyn[13] Lenny [14] "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'}/>

        </div>
    );
}

export default App;

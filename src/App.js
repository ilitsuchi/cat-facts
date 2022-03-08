import {useState, useEffect} from 'react';
import RandomCat from './Components/RandomCat';

function App()  {
  const [fact, setFact] = useState("")
  const url = 'https://cat-fact.herokuapp.com/facts/random'

  useEffect(() => {
    fetchData()
  },[]);



  const fetchData = async () => {
    const respond = await fetch(url);
    const data = await respond.json();
    data && setFact(data.text);
  }

return (
  <RandomCat fact={fact}/>
)

}

export default App;
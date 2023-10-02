
import ReactDOM from 'react-dom/client';
import girl01 from './girl01.jpg';

const greetingStyle =
{
   display:'inline-block',
   backgroundColor:'tomato',
   borderRadius:'5px',
   boxShadow : '5px 2px 3px 2px black',
   margin :'10px',
   padding:'10px',
   textAlign:'center',
   marginLeft:'120px',
   
}

function Greeting({name,city,college})
{
  return(
    <div style={greetingStyle}>
      <img src={girl01}  height="250px" width="250"/>
      <h1>Hello, {name}</h1>
      <h1>City:-{city}</h1>
      <h3>College:-{college}</h3>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Greeting name="I am Kajol" city="Amaravti" college=" P R Pote Patil College"/>
  <Greeting name="I am Sakshi" city="Nagpur" college="Shri Shivaji Science College"/>
  <Greeting name="I am Karuna" city="Yavtmal" college="G H Raisoni College"/>
  

  </>

);


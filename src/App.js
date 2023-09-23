import './App.css';
import SummaryPage from './pages/SummaryPage'
import OrderPage from './pages/OrderPage'

function App() {
  return (
    <div style={{padding:"4rem"}}>
      <OrderPage></OrderPage>
      <SummaryPage></SummaryPage>
    </div>
  );
}

export default App;

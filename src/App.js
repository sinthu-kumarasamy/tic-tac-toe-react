import React,{useState,useEffect} from 'react';
import './App.css';

const initialState = [];


function App() {
  const [matrix,setMatrix] = useState(initialState);
  const [matrixSize,setMatrixSize] = useState(3);
  const [currentPlayer,setCurrentPlayer] = useState('o');
  const [selectedRow,setSelectedRow] = useState(null);
  const [selectedCol,setSelectedCol] = useState(null);
  const [winner,setWinner] = useState(false);
  const [reset,setReset] = useState(false)
  useEffect(()=>{
    setWinner(false)
    setSelectedCol(null)
    setSelectedRow(null)
    const row = new Array(matrixSize).fill(null);
    const tempMatrix = [];
    for(let i=0;i<matrixSize;i++){
      tempMatrix.push([...row])
    }
    setMatrix(tempMatrix)
  },[reset])

  function onClickHandle(row,col){
    if(!matrix[row][col] && !winner){
      setSelectedCol(col)
      setSelectedRow(row)
      const nextPlayer = currentPlayer === 'x' ? 'o' : 'x';
      setCurrentPlayer(nextPlayer)
      const updatedMatrix = [...matrix]
      updatedMatrix[row][col] = nextPlayer
      setMatrix(updatedMatrix)
    }

  }
  function isWinner(){
    let vertical=true;
    let horizontal = true;
    let diagonal1 = true;
    let diagonal2 = true;
    if(selectedCol === null || selectedRow === null){ return}
    for(let i=0;i<matrixSize;i++){
      if(matrix[i][selectedCol]!==currentPlayer){
        vertical = false;
      }
      if(matrix[selectedRow][i]!==currentPlayer){
        horizontal = false;
      }
      if(matrix[i][i]!==currentPlayer){
        diagonal1 = false;
      }
      if(matrix[i][i-matrixSize-1]!==currentPlayer){
        diagonal2 = false;
      }

    }
    if(horizontal || vertical || diagonal1 || diagonal2){setWinner(true)}
  }
  function resetGameHandle(){
    setReset(!reset)
  }
  useEffect(()=>{
    if(!winner){
      isWinner();
    }
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={resetGameHandle}>Reset Game</button>
       {
         matrix.map((val,col)=>(
           <div className='col' key={col}>{
           val.map((value,row)=>(
             <div className='row' key={row} onClick= {()=>{onClickHandle(row,col)}}>
               {matrix[row][col]}
             </div>
           ))
          }
          </div>
         ))
       }
       <h2>{winner ? `Player ${currentPlayer} is a winner`:''}</h2>
      </header>
    </div>
  );
}

export default App;

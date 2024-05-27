
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Description from './routes/description/description.component';
import ProblemSolution from './routes/problem-solution/problem-solution.component';
import MainObjective from './routes/main-objective/main-objective.components';
import GoalsScalability from './routes/goals-scalability/goals-scalability,components';
import Resources from './routes/resources/resources.components';
import SustainableStrategy from './routes/sustainable-strategy/sustainable-strategy.component';
import KeyPoints from './routes/key-points/key-points.components';
import Test from './component/test';

const App=()=> {
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}/>
      <Route path='/description' element={<Description/>}/>
      <Route path='/problem/solution' element={<ProblemSolution/>}/>
      <Route path='/main-objective' element={<MainObjective/>}/>
      <Route path='/goals-scalability' element={<GoalsScalability/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/sustainable-strategy' element={<SustainableStrategy/>}/>
      <Route path='/key-points' element={<KeyPoints/>}/>
      <Route patch='/test' element={<Test/>}></Route>
    </Routes>
  )
}

export default App;

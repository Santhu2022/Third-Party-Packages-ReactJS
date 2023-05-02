import VideoPlayer from './components/VideoPlayer'
import BarCharts from './components/BarChart'
import PieCharts from './components/PieCharts'
import ReactChrono from './components/ReactChrono'
import './App.css'

const data = [
  {
    group_name: 'Group A',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'Group B',
    boys: 3000,
    girls: 500,
  },
  {
    group_name: 'Group C',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: 'Group D',
    boys: 700,
    girls: 1200,
  },
]

const dataFormatter = number => (number > 1000 ? `${number / 1000}k` : number)

const App = () => (
  <>
    <VideoPlayer />
  </>
)

export default App

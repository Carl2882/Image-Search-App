
import './input.css';

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src='https://images.unsplash.com/photo-1679678691006-0ad24fecb769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='' className='w-full'/>
      <div className='px-6 py-4'>
        <div className='font-bold text-orange-500 text-xl mb-2'>
            Photo by Charles Tee
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
             2300
          </li>
          <li>
            <strong>Downloads:</strong>
             700
          </li>
          <li>
            <strong>Likes:</strong>
             300
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #tag1
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #tag2
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;

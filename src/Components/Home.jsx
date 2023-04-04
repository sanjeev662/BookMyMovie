import React from 'react';
import Movie from './MainContent/Movie';

function Home() {
  return (
    <div style={{'minHeight' : '80vh'}}>

      {/* yaha pe wo side to side scroll hota hai image use lagao */}
      <Movie/>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';

import './TextOverlay.scss';

const TextOverlay = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className='TextOverlay'>
      <p><strong>Architecture of La Zad</strong> is an online video archive chronicling moments in time at La ZAD, Notre-Dame-Des-Landes, France. Use this map to move through time and space on this 1650 hectare territory of wetland.</p>

      {isExpanded ? (
        <>
          <button onClick={() => setExpanded(false)}>&lt; less</button>
          <h2>About La ZAD at Notre-Dame-Des-Landes</h2>
          <p>La ZAD (Zone a Deféndre) is a post-capitalist commune which formed as part of a resistance movement in opposition to the proposed Aéroport du Grand Ouest, planned to be built outside of Nantes, France. The airport would have paved over 1650 hectares of farmland, displacing farmers and destroying an important wetland ecosystem. Over the span of 10 years, farmers and environmental activists defended the parcel of land through squatting– living directly in the forest, building treehouses and huts, engaging in direct action, and growing food. Today, after two rounds of massive evictions and home demolitions, La ZAD remains as a commune living with the intention to support mutual aide and biodiversity.</p>
          <p>The purpose of this map is to make a living archive and continue to tell the story of a place which has been built and destroyed many times– a place which still struggles to exist– as well as to document the as of yet uncounted (somewhere in the range of 100 or more) imaginative, playful, temporary structures which emerged at the ZAD- each one its own microcosm, its own social realm. The purpose of the map is to bring participants into the feelings of inhabiting this particular space– peaceful moments, moments of conflict, of building, destruction, joy and loss.</p>
          <p>This project is a collaboration between Jaime Iglehart, Eric Brelsford, and Contributors from the ZAD.</p>
        </>
      ) : (
        <button onClick={() => setExpanded(true)}>more &gt;</button>
      )}
    </div>
  );
};

export default TextOverlay;

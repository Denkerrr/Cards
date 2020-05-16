import React from 'react';


export class Menu extends React.component {
     constructor(props) {
         const games = [{
             name: 'Манчкин',
             image: '',
             reference: ''
         }]
         super(props);
     }

     render() {
         return (
             <div className="Menu">
                 <div className="title">Добро пожаловать в карточный мир</div>
                 <div className="games">

                 </div>
             </div>
         );
     }
}

export default Menu;
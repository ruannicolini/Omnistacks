import React from 'react';

export default function Header(props) {
    return (
        <header>  
            <h1>{props.children}</h1>   
        </header>        
    );
}

// Outros Modelos de recuperação de prop:

// 1) Quando passamos especificando a props, exe: <Header title="Be The Hero"/>
// recuperamos com props.NomePropriedade
// export default function Header(props) {
//     return (
//         <header>  
//             <h1>{props.title}</h1>   
//         </header>        
//     );
// }


// 2) Quando não informamos a propriedade, apenas passamos dentro da tag, Exe: <Header>teste</Header>
//Podemos obter o valor dentro do componenete pela prop children
// export default function Header(props) {
    // return (
    //     <header>  
    //         <h1>{props.children}</h1>
    //     </header>        
    // );
// }

// 3) Desestruturação.  Nore que ja informamos na declaração qual props esperamos receber!
// export default function Header({ children, title }) {
//     return (
//         <header>  
//             <h1>{title}</h1>   
//             <h1>{children}</h1>
//         </header>      
//     );
// }


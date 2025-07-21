import React, { type JSX } from 'react';
import Card from "../Card/Card";


interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
    return <div>
        <Card companyName="Apple" ticker="AAPL" price={290}/>
         <Card companyName="Tesla" ticker="TSLA" price={830}/>
          <Card companyName="MicroSoft" ticker="MSFT" price={192}/>
    </div>;

};

export default CardList;
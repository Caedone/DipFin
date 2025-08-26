
import { useParams } from "react-router-dom";

interface Props {}

const CompanyPage = (props: Props) => {
    const { ticker } = useParams<{ ticker: string }>();
    
    if (!ticker) {
        return <div>Ticker not found</div>;
    }
    
    return <div>CompanyPage for {ticker}</div>;
};
export default CompanyPage;
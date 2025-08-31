import axios from 'axios';
import { type CompanyProfile, type CompanySearch } from './company.d';

interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string): Promise<any> => {
    // Since this is a APU call, we need to use a try-catch block to handle any errors that may occur
    console.log('searchCompanies called with:', query);
    console.log('API Key:', import.meta.env.VITE_API_KEY);
    try {
        const url = `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&apikey=${import.meta.env.VITE_API_KEY}`;
        console.log('Making request to:', url);
        const data = await axios.get<SearchResponse>(url);
        console.log('API Response:', data);
        
        // Return the data from the API call
            return data.data

    } catch (error)
    {
        if(error instanceof Error) {
            console.log('Error message,', error.message);
            return error.message;
        }
        else{
            console.log('Unexpected error', error);
            return 'Something fugged up';
        }
    }

};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${import.meta.env.VITE_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
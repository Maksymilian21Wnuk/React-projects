import Header from "../components/header";
import BoxWrapper from "../components/box_wrapper";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function exp_cards(item : any){
    return (
        <Box border={1} borderRadius="26px" borderColor="secondary.main" sx={{textAlign:"left", width: '1000px', p: '20px', borderRadius: '8px', backgroundColor: 'primary.light', marginBottom: '20px' }}>
            <Typography variant="h4" sx={{mb:'10px'}}>{item.name}</Typography>
            <Typography variant="h5" sx={{mb:'10px'}}>{item.position}</Typography>
            <Typography variant="h5" sx={{mb:'10px'}}>{item.date}</Typography>
            <Typography variant="h5">{item.description}</Typography>

        </Box>
    )
    
}

export default function Experience() {
    const data = [
        {
            name : "POLcomp",
            position: "Engineer",
            date: "March 2014-January 2016",
            description: "I was responsible for developing new features and fixing bugs in the company's software."
        },
        {
            name : "ProgrameX",
            position : "Developer",
            date: "February 2016-September 2018",
            description: "I was responsible for developing new features and fixing bugs in the company's software.",
        },
        {
            name : "SysyComp",
            position : "Senior Developer",
            date: "October 2018-December 2020",
            description: "I was responsible for developing new features and fixing bugs in the company's software.",
        },
        {
            name : "TechComp",
            position : "Manager",
            date: "January 2021-Currently",
            description: "I am responsible for managing the team and developing new features and fixing bugs in the company's software.",
        }
      ]

    return (
        <BoxWrapper>
            <Header title="Experience" />
                {data.map((item) => exp_cards(item))}
        </BoxWrapper>
    );
}
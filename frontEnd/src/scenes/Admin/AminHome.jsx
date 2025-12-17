import React,{useEffect,useState} from 'react'
import { Box, Grid, Typography, Paper,useTheme } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BrushIcon from "@mui/icons-material/Brush";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import Header from '../../Components/Header'
import {useParams} from 'react-router-dom'
import {tokens} from '../../Theme'
import Api from '../../Api'

const StatCard = ({ title, value, icon }) => {
    const theme =useTheme();
        const colors =tokens(theme.palette.mode);
        
        return(
          <Paper sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 ,backgroundColor:colors.primary[400]}}>
    {icon}
    <Box>
      <Typography variant="subtitle1" style={{textTransform:"uppercase"}}color={colors.greenAccent[200]}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.grey[200]}>{value}</Typography>
    </Box>
  </Paper>
)};

const AdminHome = () => {
  const initialValues={
    noofComplaints: 0, 
    noofUser: 0, 
    noofArtist: 0, 
    formattedNComplaints:[  {
    "id": "complaints",
    "data": [
      { "x": "Jan", "y": 10 }
    ]
  }],
  topTenArtist:[
                { name: "unKnown", artistRating: 0 },
              ],
    }
  const theme =useTheme();
  const colors =tokens(theme.palette.mode);
      const { id } = useParams();
  const [Datas, setData] = useState(initialValues);

    useEffect(()=>{
      const fetchData=async()=>{
        try {
          const response=await Api.get(`/admin/${id}/home`)
            setData(response.data);  
        } catch (err) {
          console.log(err);
        }
    }
  fetchData()},[id])

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Header title="Admin Dashboard" subtitle="Overview & quick actions" /> 
              </Box>
      
<Box>
        {/* 🔹 Stats Cards */}
      <Grid container spacing={5} style={{marginBottom:"30px"}}>
        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Users"
            value={Datas?.noofUser}
            icon={<PeopleIcon color="primary" fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Artists"
            value={Datas?.noofArtist}
            icon={<BrushIcon color="secondary" fontSize="large" />}
          />
        </Grid>
          <Grid item xs={12} md={3}>
          <StatCard
            title="Complaints"
            value={Datas?.noofComplaints}
            icon={<ReportProblemIcon color="error" fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Revenue"
            value="₹2.4L"
            icon={<CurrencyRupeeIcon color="success" fontSize="large" />}
          />
        </Grid>
      </Grid>

       {/* 🔹 Charts Section */}
      <Grid container spacing={5} mt={1} style={{overFlow:"hidden",marginBottom:"30px"}}>
        {/* Line Chart */}
        <Grid item xs={12} md={8} size={6}>
            <Typography variant="subtitle1" style={{textTransform:"uppercase"}}color={colors.greenAccent[200]}>
              Platform Growth
            </Typography>
          <Paper sx={{ height: 350, p: 2 ,backgroundColor:colors.primary[400]}}>
            
            <ResponsiveLine
              data={Datas.formattedNComplaints}
              
              margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: 0, max: "auto" }}
              axisBottom={{ legend: "Month", legendOffset: 44 }}
              axisLeft={{ legend: "complaints", legendOffset: -48 }}
              colors={{ scheme: "category10" }}
              pointSize={10}
              theme={{text:{fill:colors.grey[200],fontSize:15}}}
            />
          </Paper>
        </Grid>

        {/*  */}
       
  

        {/* Pie Chart */}
        <Grid item xs={12} md={4} size={6}>
            <Typography variant="subtitle1" style={{textTransform:"uppercase"}}color={colors.greenAccent[200]}>
              User Roles
            </Typography>
          <Paper sx={{ height: 350, p: 2,backgroundColor:colors.primary[400] }}>
            
            <ResponsivePie
              data={[
                { id: "Users", value: Datas?.noofUser },
                { id: "Artists", value: Datas?.noofArtist },
              ]}
              margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={{ scheme: "paired" }}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 30,
                  itemWidth: 80,
                  itemHeight: 14,
                },
              ]}
              theme={{text:{fill:colors.blueAccent[400],fontSize:"15px !important"}}}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* 🔹 Bar Chart */}
      <Grid container spacing={3} mt={1} style={{overFlow:"hidden",marginBottom:"20px"}} >
        <Grid item xs={12} size={12}>
             <Typography variant="subtitle1" style={{textTransform:"uppercase"}}color={colors.greenAccent[200]}>
              Monthly Complaints
            </Typography>
          <Paper sx={{ height: 320, p: 2 ,backgroundColor:colors.primary[400]}}>
           
            <ResponsiveBar
              data={Datas.topTenArtist}
              keys={["artistRating"]}
              indexBy="name"
              margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
              axisBottom={{ legend: "Name", legendOffset: 44 }}
              axisLeft={{ legend: "Rating", legendOffset: -48 }}
              colors={{ scheme: "set2" }}
              theme={{text:{fill:colors.grey[200],fontSize:15}}}

            />
          </Paper>
        </Grid>
      </Grid>
 </Box>

{/*  */}
    </Box>
  );
};

export default AdminHome;

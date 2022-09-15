import Divider from '@mui/material/Divider';
import JudgeSearchForm from '../components/judge/JudgeSearchForm';

export default function JudgePage(){
    return(
        <section style={{margin : 40}}>
            <header 
                style={{color : "#00AEEF", fontSize:48 , fontWeight:"bold"}}
            >
                프로젝트 등록 심사
            </header>

            <Divider style={{boxShadow: "0px 2px 4px gray", margin : "15px 0px 25px 0px"}}/>

            <JudgeSearchForm/>
        </section>
    )
}
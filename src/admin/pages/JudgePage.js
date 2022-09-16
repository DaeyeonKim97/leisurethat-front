import Divider from '@mui/material/Divider';
import JudgeSearchForm from '../components/judge/JudgeSearchForm';
import JudgeTable from '../components/judge/JudgeTable';

export default function JudgePage(){
    return(
        <section style={{margin : 40}}>
            <header 
                style={{color : "#00AEEF", fontSize:36 , fontWeight:"bold"}}
            >
                프로젝트 등록 심사
            </header>

            <Divider style={{boxShadow: "0px 2px 4px gray", margin : "15px 0px 25px 0px"}}/>
            <JudgeSearchForm/>

            <section>
                총 20 개
            </section>

            <JudgeTable/>
        </section>
    )
}
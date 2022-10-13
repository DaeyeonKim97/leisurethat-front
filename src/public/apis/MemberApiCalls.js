export const callRegisterAPI = async(form) => {
    
    const requestURL = `http://localhost:8001/signup`;
    console.log("전달된 form :" , form);

        const result =  await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                username: form.username,
                password: form.password,
                email: form.email,
                name: form.name                
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);
        

        if(result.httpStatus === 201){
            alert("회원가입에 성공하셨습니다.");
            document.location.href = '/login';          
        } else if(result.httpStatus === 400){
           //회원가입 실패페이지(?)
        }
        }
        

export const callLoginAPI = async({form}) => {

    const requestURL = `http://localhost:8001/login`;
    console.log("전달된 form :" , form);

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                username: form.username,
                password: form.password
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);

        if(result.httpStatus === 200){
            window.localStorage.setItem('accessToken', result.results.token);
            window.localStorage.setItem('username', result.results.id);
            document.location.href = '/';          
        } else if(result.httpStatus === 400){
            alert("로그인 정보가 올바르지 않습니다.");
        }    

}

export const callGetUserListAPI = () => {
    const requestURL = `http://localhost:8001/user`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);

        
    };
}

export const callDuplicationAPI = async(username) => {

    const requestURL = `http://localhost:8001/duplication/username`;
    console.log("전달된 username :" , username);

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"      
            },
            body: JSON.stringify({
                username: username,
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callDuplicationAPI RESULT : ', result);

        if(result.httpStatus === 200){
            alert("사용 가능한 아이디 입니다.");
        } else if(result.httpStatus === 400){
            alert("사용할 수 없는 아이디 입니다.");
        }    

}


export const callGetUserAPI = ({username}) => {
    const requestURL = `http://http://localhost:8001/user${username}`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
            }
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);
        
    };
}
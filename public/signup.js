// 가입하기 버튼을 눌렀을 때 실행될 함수
async function handleSignUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        // 1. Firebase에 사용자 등록
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // 2. 가입 직후 해당 사용자에게 인증 메일 발송
        await sendEmailVerification(userCredential.user);
        
        alert("회원가입 성공! 입력하신 메일함에서 인증 링크를 클릭해주세요.");
        
        // 인증을 마칠 때까지 기다려야 하므로 로그아웃 시키거나 대기 화면으로 이동
        location.href = "index.html"; 
    } catch (error) {
        alert("에러: " + error.message);
    }
}
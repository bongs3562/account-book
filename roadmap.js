import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseApp } from "./firebase-config.js"; // 설정 파일이 따로 있다면 경로 확인!

const auth = getAuth();

// 페이지가 로드되자마자 로그인 상태를 체크합니다.
onAuthStateChanged(auth, (user) => {
    if (user) {
        // 로그인 성공 상태!
        console.log("로그인 확인됨:", user.email);
        // 여기에 원래 가계부 데이터를 불러오는 함수들을 넣으면 됩니다.
    } else {
        // 로그인 안 된 상태!
        alert("로그인이 필요한 페이지입니다. 로그인 화면으로 이동합니다.");
        window.location.href = "index.html"; // 로그인 페이지 파일명에 맞춰 수정하세요
    }
});
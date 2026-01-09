# 🛠 트러블 슈팅 로그

## [날짜] 문제 상황 요약 (예: 안드로이드 빌드 실패)

### 1. 문제 상황 (Context)

- **발생 환경:** Android Emulator (Pixel 4 API 30)
- **오류 메시지:** `Task :app:installDebug FAILED`
- **상황 설명:** 지도 라이브러리를 추가한 후 안드로이드에서만 빌드가 계속 실패함.

### 2. 원인 추론 (Analysis)

- Google Maps API Key가 `AndroidManifest.xml`에 제대로 들어가지 않은 것 같음.
- 혹은 `build.gradle` 버전 호환성 문제일 가능성 있음.

### 3. 해결 과정 (Attempt)

1. **시도 1:** API Key 재발급 및 적용 -> **실패** (여전히 같은 에러)
2. **시도 2:** `cd android && ./gradlew clean` 명령어로 캐시 삭제 후 재빌드 -> **성공**
   - 원인은 라이브러리 추가 후 네이티브 의존성 캐시가 꼬였던 것으로 파악됨.

### 4. 배운 점 (Result & Insight)

- 네이티브 모듈을 설치한 직후에는 습관적으로 캐시 클린을 하거나 앱을 완전히 삭제하고 다시 깔아야 함을 배움.
- 에러 로그의 `Caused by...` 부분을 더 꼼꼼히 읽는 습관이 필요함.

FROM ubuntu:20.04
RUN apt update && apt install -y python3
# RUN, 운영체제 명령어 사용할 때.
WORKDIR /var/www/html
# WORKDIR, 기준 경로 설정.

# RUN echo "Hello, <strong>Docker</strong>" > index.html
COPY ["index.html", "."]
# 호스트의 "index.html"을, "workdir폴더"에, 복사

CMD ["pyton3", "-u", "-m", "http.server"]
# python3 -m http.server

# RUN 빌드가 되는 시점에 실행되는 명령어 (image에 반영)
# CMD 컨테이너가 실행될 때 실행되는 명령어 (container에 반영)
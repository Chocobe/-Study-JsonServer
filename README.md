# 01. ``json-server`` 를 사용한 ``Mock Back End`` 만들기

``json-server`` 라이브러리는 ``파일기반``의 ``Mock Back End 서버``를 제공 합니다.

> Github: [https://github.com/Chocobe/-Study-JsonServer](https://github.com/Chocobe/-Study-JsonServer)

<br/>

특별한 설정 없이, ``json`` 또는 ``js`` 파일을 사용하여 ``CLI`` 명령으로 ``Mock Back End`` 서버를 실행 시켜줍니다.



<br/><br/>



## 01-01. 설치

```bash
$ npm i -g json-server
```

또는

```bash
$ npm i --save-dev json-server
```



<br/><br/>



## 01-02. DB 파일 만들기 (``JSON``)

``json-server`` 는 ``json`` 또는 ``js`` 파일을 사용하여, ``Rest API`` 요청을 할 수 있는 ``Local Server``를 실행시켜 줍니다.

이 때 사용할 파일에는 ``Mock DB``를 만들어 주기만 하면 됩니다.

<br/>

 다음 코드는 ``Mock DB``로 사용할 ``myDB.json`` 입니다.

 ```json
{
  "users": [
    {
      "id": 1,
      "name": "Kim",
      "job": "Developer"
    },
    {
      "id": 2,
      "name": "John",
      "job": "Director"
    },
    {
      "id": 3,
      "name": "Bob",
      "job": "Teacher"
    }
  ]
}
 ```



<br/><br/>



## 01-03. ``Mock Back End`` 실행하기

터미널에 다음 명령을 사용하여, ``Mock Back End 서버``를 실행할 수 있습니다.

```bash
$ json-server myDB.json --watch --port 8001
```

<br/>

위 명령을 통해 서버가 실행되면, 다음과 같이 결과를 확인할 수 있습니다.

또한 Rest Full API 명령은 모두 요청할 수 있습니다.

<img src="./readmeAssets/01-json-server%20만들기-01.png" width="700px" alt="이미지: json-server 결과 01"><br/>

<img src="./readmeAssets/01-json-server%20만들기-02.png" width="700px" alt="이미지: json-server 결과 02"><br/>

<img src="./readmeAssets/01-json-server%20만들기-03.png" width="700px" alt="이미지: json-server 결과 03"><br/>



<br/><br/>




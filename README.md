# 大人数イラスト伝言ゲーム
## サービス概要

人数が無制限でのプレイを想定したイラストによる伝言ゲームです。

伝言ゲーム自体を楽しむ事と、大人数による

二転三転する展開を楽しむ事を主眼に置いています。

## このサービスへの思い・作りたい理由

アイデアを考えついたのは、

どのようなサービスを作るか考えながら漠然と動画を見ていた時でした。

あるyoutuberが公開しているゲーム実況で

イラスト形式の伝言ゲームを数名で遊んでいました。

自身も同ゲームを友人数名と遊んだことがあり、とても盛り上がった事を覚えています。

その時になんとなく、あのゲームの何が面白かったかなーと考えていたところ

伝言をしていく過程でお題とは全く別のイラストが出来上がっていくという、

結果を楽しんでいたのだと分かりました。

なので、その要素を拡張してなおかつオリジナルとは違うことができるアプリを

作れたら面白いのでないかと思いを元に、こちらのサービスを考えていきました。

## ユーザー層について

・すきま時間にゲームをするユーザー

・面識のない複数の人物と協力するゲームで達成感を感じることができるユーザー

・予想だにしない展開を楽しみたいユーザー


このサービスはプレイ時間が短く、切り上げるタイミングが掴みやすいです。

そのため、仕事の休憩中や家事の合間などのすきま時間にゲームをするようなユーザーに利用してもらうことを想定しています。

複数の人物が共通の目標を達成するゲームであるため、人数が増えるほど難易度と達成感は上がっていくと考えています。

ですが、恐らく人数が増えていくほどお題の内容とかけ離れていくと思いますので、その展開を楽しんでもらうことを主な楽しみ方になります。

## サービス概況・サービスコンセプト（ゲーム系）

CRUDを行う機能を増やす形でバックエンドの能力を培うことが可能だと考えています。
例えば、フレンド機能を追加することでBDへのアクセス方法を増やせます。
ゲームを招待制にしたり、フレンド機能を利用した新たな機能を追加することも可能です。
また、ユーザーが描いたイラストをDBに蓄えそれを利用したコンテンツを追加したり
することも可能であると考えています。
そのような機能を実際に追加することはコンテンツのどの点を、どの程度充足させるかによって異なると思いますが
そのような考え方で開発を継続することが可能だと思います。

## サービスの利用イメージ

・お題一覧からお題を選択します。

・制限時間内にイラストを描き、その後イラストにタイトルをつけます。

・参加した伝言ゲームが終わると通知が来るため、どのような結果になったか見ることができます。

・結果は一枚ずつみるものと一連のイラストをgifで表示することができ、イラストの遍歴を見ていくことができます。

## ゲストユーザーについて

このサービスではゲストユーザーでの利用も想定しています。

サービスの雰囲気を感じてもらうことが目的です。


以下がゲストユーザーの利用できる機能になります。

・お題ランダムによる伝言ゲームの参加

・直近5件までの伝言結果の閲覧


会員登録を行うことで今までの伝言結果の閲覧や、ジャンルを選んで伝言ゲームに参加することが可能になります。

また、お題を自分で作成することができるようになります。

## ユーザーの獲得について

・SNSでの広告、興味のありそうな人物らへの宣伝

・知人、友人を介した広告

## サービスの差別化ポイント・推しポイント

・参加できる人数を無制限にしている点

　大人数でのプレイによるユニークな展開を期待しているため


・全てのイラストにタイトルをつける形にしている

　参加ユーザーの思考を、文字の形で見ることができる


・ゲーム終了後結果を見ることができ、イラストの動向をgif形式で見ることができる点

　ゲーム展開を楽しむことを主眼に置いているため


・自分が参加しなかったゲーム結果も見ることが可能な点

　自分が関わっていないゲーム展開も楽しめる

## 機能候補

### MVP

*会員登録

*ログイン

*お題一覧

*お題登録

*伝言中一覧

*伝言参加

*伝言参加時の順番待ちによるキュー機能

*伝言結果一覧

*伝言結果詳細

### その後の機能

*全体統計

*お題ランダム選定

*殿堂入り機能

*伝言終了通知

*シェア機能

*いいね機能

*検索機能

## 機能の実装方針予定

以下のライブラリ等を実装に利用することを考えています。


*ペイント機能 - CSS Paint API

*ウィザード形式の入力 - devise

*シェア機能 - Instagram Graph APIやTwitter API

*検索機能 - ransack

*キュー機能 - ActiveJob, Sidekiq


また、Railsは7系の利用を想定してます。



画面遷移図(figma): https://www.figma.com/file/RXXUo3ijt3lr8cu86uGmbY/%E5%A4%A7%E4%BA%BA%E6%95%B0%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E4%BC%9D%E8%A8%80%E3%82%B2%E3%83%BC%E3%83%A0?type=design&node-id=0%3A1&mode=design&t=W7QIQyav9EtdDY4R-1
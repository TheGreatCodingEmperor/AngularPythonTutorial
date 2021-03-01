ng generate module --routing $1
cd $1
mkdir services
mkdir components
mkdir views
cd services
ng generate service $1
cd ../views
ng generate $1-main
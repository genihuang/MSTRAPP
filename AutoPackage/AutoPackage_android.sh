# 變數定義
# envDesc：環境描述 Uat,PreProd,Prod
# isHicloud：是否上傳HiCloud
# isArxan:是否要混淆
# projectDir：專案路徑
# platformPath：平台路徑
# archivePath：archive路徑
# xcworkspaceFileName：ios workspace name
# MARKETING_VERSION：本次版本號
# CURRENT_PROJECT_VERSION：Build 版本號
# PRODUCT_BUNDLE_IDENTIFIER：Bundle Id

# envDesc：環境描述 Uat,PreProd,Prod
envDesc=""
hicoludEnvDesc=""
# isHicloud：是否上傳HiCloud
isHicloud=""
# isArxan:是否要混淆
isArxan=""
isAxanFlag=""
# projectDir：專案路徑
projectDir="/Users/aztl/Documents/Project/HealthClub"
# platformPath：平台路徑
platformPath=$projectDir"/healthclubapp_android_tickets"
# apkPath:apk outputPath
apkBasePath=$platformPath"/app"
apkPath=""
apkOriBaseFileName="app"
apkOriFileName=""
apkDistFileName="healthclub"
apkExtFileName=".apk"
# keyStoreFile
keystoreFileName=$projectDir"/HealthClub.keystore"
storePassword="aztl888"
storeAlias="aztl"
keyPassword="aztl888"

#Arxan Xcconfig File
A4APath="/Users/aztl/Documents/Arxan_Guardspec/Health/A4A_APKProtection"
arxanScriptFile="runA4A.sh"
A4ASHName="runA4A.sh"
A4AOriDir="ori_dir"
A4ASignDir="signed_apk_dir"
arxanSignFileName="-aligned-signed-protected"
# s3cmd Path
hicloudPath="/Users/aztl/Documents/hicloud/healthclub"
# 時間
date=`date '+%Y%m%d_%H%M%S'`

# MARKETING_VERSION：本次版本號
MARKETING_VERSION=""
# CURRENT_PROJECT_VERSION：Build 版本號
CURRENT_PROJECT_VERSION=""
# PRODUCT_BUNDLE_IDENTIFIER：Bundle Id
#PRODUCT_BUNDLE_IDENTIFIER_BASE="tw.com.allianz.healthclub"
appDesc="安聯 i 健康"
exportPath=""
schemeNameBase="Health_Club_Android"
scheme_name=""

taskNameBase=":app:assemble"
taskName=""
taskEnv=""
apkEnv=""
# 指定要打包的方式 : Release,Debug。一般用Release。必填
taskBuildConfig=""
apkBuildConfig=""
HicloudBucketBase="healthclub"


cd $platformPath
git checkout master
git stash save
git stash clear
git clean -df
git pull
git fetch origin --tags --force

echo -e "\n*************\nCheck Git Log\n*************\n"
cd $platformPath
git log --oneline -5
pause 'Press Enter to continue ...'

### 環境設定===========================================================
echo "~~~~~~~~~~~~選擇環境~~~~~~~~~~~~~~~"
echo " 1：UAT"
echo " 2：PrePROD"
echo " 3：PROD"
# 讀取使用者輸入並存到變數裡
read InputEnv
sleep 0.5
env="$InputEnv"

# 判讀使用者是否有輸入
#apkBasePath=$platformPath"/app/build/outputs/apk/uat/release"
#apkPath=""
#apkOriBaseFileName="app-uat-release"
#apkOriFileName=""
#apkDistFileNmae="healthclub"
#apkExtFileName=".apk"
#taskNameBase=":app:assemble"
if [ -n "$env" ]
    then
    if [ $env == "1" ]
        then
        envDesc="Uat"
        hicoludEnvDesc="uat"
        taskEnv="Uat"
        apkEnv="uat"
        apkPath=$apkBasePath"/build/outputs/apk"
        #PRODUCT_BUNDLE_IDENTIFIER=$PRODUCT_BUNDLE_IDENTIFIER_BASE".UAT"
        HicloudBucket=$HicloudBucketBase"uat"
        echo "scheme_name="$scheme_name
    elif [ $env == "2" ]
        then
        envDesc="PreProd"
        hicoludEnvDesc="preprod"
        taskEnv="pre_launch"
        apkEnv="pre_launch"        
        #taskNameBase=$taskNameBase"pre_launchRelease"
        #apkPath=$apkBasePath"/pre_launch/release"
        #apkOriFileNmae=$apkOriBaseFileName"-pre_launch-release"
        #PRODUCT_BUNDLE_IDENTIFIER=$PRODUCT_BUNDLE_IDENTIFIER_BASE".PREPROD"
        HicloudBucket=$HicloudBucketBase"uat"
        echo "scheme_name="$scheme_name
    elif [ $env == "3" ]
        then
        envDesc="Prod"
        taskEnv="prod"
        apkEnv="prod"        
        #taskNameBase=$taskNameBase"prodRelease"
        #apkPath=$apkBasePath"/prod/release"
        #apkOriFileNmae=$apkOriBaseFileName"-prod-release"
        #PRODUCT_BUNDLE_IDENTIFIER=$PRODUCT_BUNDLE_IDENTIFIER_BASE
        HicloudBucket=$HicloudBucketBase
        echo "scheme_name="$scheme_name
    elif [ $env == "4" ]
        then
        envDesc="Prod"
        taskEnv="prod"
        apkEnv="prod"        
        #taskNameBase=$taskNameBase"prodRelease"
        #apkPath=$apkBasePath"/prod/release"
        #apkOriFileNmae=$apkOriBaseFileName"-prod-release"
        #PRODUCT_BUNDLE_IDENTIFIER=$PRODUCT_BUNDLE_IDENTIFIER_BASE
        HicloudBucket=$HicloudBucketBase
        echo "scheme_name="$scheme_name
    else
        echo "別亂輸入好嗎？"
        exit 1
    fi
else
    echo "別不輸入好嗎？"
    exit 1
fi
### ===========================================================

### version版本號設定===========================================================
echo "~~~~~~~~~~~~請輸入本次版本號~~~~~~~~~~~~~~~"
echo "範例：1.0.0, UAT:1.0.0.1"
# 讀取使用者輸入並存到變數裡
read InputMVersion
sleep 0.5
Mversion="$InputMVersion"
# 判讀使用者是否有輸入
if [ -n "$Mversion" ]
    then
    MARKETING_VERSION=$Mversion
    echo "MARKETING_VERSION="$MARKETING_VERSION
else
    echo "別不輸入好嗎？"
    exit 1
fi
### ===========================================================

### build版本號設定===========================================================
echo "~~~~~~~~~~~~請輸入本次打包的方式~~~~~~~~~~~~~~~"
echo " 1：Release"
echo " 2：Debug"
# 讀取使用者輸入並存到變數裡
read buildConfiguration
sleep 0.5
pBuildConfig="$buildConfiguration"
# 判讀使用者是否有輸入
if [ -n "$pBuildConfig" ]
    then
    if [ $env == "1" ]
    then
        taskBuildConfig="Release"
        apkBuildConfig="release"
        echo "buildConfig="$buildConfig
    else
        taskBuildConfig="Debug"
        apkBuildConfig="debug"
        echo "buildConfig="$buildConfig    
    fi
else
    taskBuildConfig="Release"
    apkBuildConfig="release"
    echo "buildConfig="$buildConfig
fi
### ===========================================================
### 是否Arxan混淆===========================================================
echo "~~~~~~~~~~~~是否需要Arxan混淆~~~~~~~~~~~~~~~"
echo "範例：Y/N"
echo "default:N"
# 讀取使用者輸入並存到變數裡
read inputArxan
sleep 0.5
# pIsArxan="$inputArxan"
# 判讀使用者是否有輸入
if [ -n "$inputArxan" ]
    then
    if [ $inputArxan == "Y" -o $inputArxan == "y" ]
        then
        isAxanFlag="Y"
        isArxan="Arxan"
        echo "isArxan="$isArxan
    else 
        isAxanFlag="N"
        isArxan="nonArxan"
        echo "isArxan="$isArxan
    fi
else
        isAxanFlag="N"
        isArxan="nonArxan"
        echo "isArxan="$isArxan
fi
### ===========================================================

### 上傳Hicloud===========================================================
echo "~~~~~~~~~~~~是否需要上傳至Hicloud~~~~~~~~~~~~~~~"
echo "範例：Y/N"
echo "default:N"
# 讀取使用者輸入並存到變數裡
read inputHicloud
sleep 0.5
# 判讀使用者是否有輸入
if [ -n "$inputHicloud" ]
then
isHicloud="$inputHicloud"
else
isHicloud="N"
fi
echo "isHicloud="$isHicloud
### ===========================================================

### 上傳Hicloud===========================================================
echo "~~~~~~~~~~~~請輸入EMAIL信箱~~~~~~~~~~~~~~~"
echo "範例：geni.huang@allianz.com.tw"
echo "default:geni.huang@allianz.com.tw"
# 讀取使用者輸入並存到變數裡
read inputEmail
sleep 0.5
# 判讀使用者是否有輸入
if [ -n "$inputEmail" ]
then
Email="$inputEmail"
else
Email="geni.huang@allianz.com.tw"
fi
echo "Email="$Email
### ===========================================================
git checkout "$MARKETING_VERSION"
### 參數設定===========================================================
# s3cmd Path
taskName="$taskNameBase$taskEnv$taskBuildConfig"
apkPath="$apkPath/$apkEnv/$apkBuildConfig"
apkOriFileName="$apkOriBaseFileName-$apkEnv-$apkBuildConfig"
apkDistFileName=$schemeNameBase
scheme_name=$schemeNameBase
exportPath="$projectDir/Export/$envDesc/$scheme_name/$MARKETING_VERSION/$date"
# s3cmd Path
s3cmdPath="$hicloudPath/$envDesc/$MARKETING_VERSION"
### ===========================================================

cd $platformPath
# 清除build資料
./gradlew clean

# 產生apk檔
./gradlew $taskName -Pandroid.injected.signing.store.file=$keystoreFileName \
-Pandroid.injected.signing.store.password=$storePassword \
-Pandroid.injected.signing.key.alias=$storeAlias \
-Pandroid.injected.signing.key.password=$keyPassword \

#apkPath=$platformPath"/app/build/outputs/apk/uat/release"
#apkOriFileNmae="app-uat-release"
#apkDistFileNmae="healthclub"
#apkExtFileName=".apk"
#  檢查是否產生apk是否成功

if [ -f "$apkPath/$apkOriFileName$apkExtFileName" ]
then
    echo -e "\n\n產生apk成功n\n"
else
    echo -e "\n\n產生apk失敗\n\n"
    exit 1
fi
# Arxan
#cd ${export_apk_path}
### ==========Arxan Copy xcconfig
#A4AOriDir="ori_dir"
#A4ASignDir="signed_apk_dir"
    
# 指定輸出資料夾不存在則創建
if [ -d "$exportPath" ] 
    then
        echo $exportPath
    else
        mkdir -pv $exportPath
fi
if [ $isAxanFlag == "Y" ]
then
    # 刪除Arxan apk
    cd $A4APath/$A4AOriDir
    rm -f $A4APath/$A4AOriDir
    cd $A4APath/$A4ASignDir
    rm -f $A4APath/$A4ASignDir
    #搬移apk至Arxan folder
    cp "$apkPath/$apkOriFileName$apkExtFileName" "$A4APath/$A4AOriDir/$apkOriFileName$apkExtFileName"
    cd $A4APath
    sed -i '' -n '1,/#ARXAN_APKNAME_S/p;/#ARXAN_APKNAME_E/,$p' $arxanScriptFile
    sed -i '' '/ARXAN_APKNAME_S/G' $arxanScriptFile
    sed -i '' '/#ARXAN_APKNAME_S/a\
    APK_NAME="'$apkOriFileName'"' $arxanScriptFile
    sh ./runA4A.sh

    cd $A4APath/$A4ASignDir
    cp $apkOriFileName$arxanSignFileName$apkExtFileName /$exportPath
    #cd /$exportPath
    #mv $apkOriFileName$arxanSignFileName$apkExtFileName ${apkDistFileName}"-"${isArxan}${apkExtFileName}
else
    cp "$apkPath/$apkOriFileName$apkExtFileName" /$exportPath
fi
cd /$exportPath
mv $apkOriFileName$arxanSignFileName$apkExtFileName ${apkDistFileName}"-"${isArxan}${apkExtFileName}

### move file to export
if [ -f "$exportPath/${apkDistFileName}"-"${isArxan}${apkExtFileName}" ]
then
    echo -e "\n\napk搬移至Export Path成功\n\n"
else
    echo -e "\n\napk搬移至Export Path失敗\n\n"
    exit 1
fi

### 檔案搬移至s3cmd資料夾===========================================================
# 指定輸出資料夾不存在則創建
if [ -d "$s3cmdPath" ] 
then
    echo -e "\n\n資料夾存在，執行apk搬移"
else
    echo -e "\n\n資料夾不存在，建立新資料夾並執行apk搬移"
    mkdir -pv $s3cmdPath
fi

# 複製ipa到s3cmd目錄
cp $exportPath/${apkDistFileName}"-"${isArxan}${apkExtFileName} "$s3cmdPath"

# 檢查s3cmd目錄ipa檔案是否存在
if [ -f $s3cmdPath/${apkDistFileName}"-"${isArxan}${apkExtFileName} ]
then
    echo -e "\n\n移動至s3cmd成功\n\n"
    open $s3cmdPath
else
    echo -e "\n\n移動至s3cmd失敗\n\n"
    exit 1
fi
### ===========================================================

### 建立Email===========================================================
cat > $s3cmdPath/$scheme_name-$isArxan.html <<EOF
<html>

<head>
	<title>${appDesc} ${scheme_name} ${envDesc}環境</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
	<script type="text/javascript" src="https://$HicloudBucket.s3.hicloud.net.tw/JS/qrcode.js"></script>
</head>

<body>
	<div>${appDesc} ${scheme_name} ${envDesc}環境 ${MARKETING_VERSION}版本 $isArxan</div>
	<div id="qrcode" style="width:300px; height:300px; margin-top:15px;"></div>
	<script type="text/javascript">
		var qrcode = new QRCode(document.getElementById("qrcode"), {
			width: 300,
			height: 300
		});
		function makeCode() {
			var elText = document.getElementById("text");
			qrcode.makeCode("https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$apkDistFileName-$isArxan$apkExtFileName");
		}
		makeCode();
	</script>
</body>

EOF
### ===========================================================

### 建立Email===========================================================
cat > $s3cmdPath/$scheme_name-$isArxan.txt <<EOF
Subject: ${appDesc} ${scheme_name} ${envDesc}環境 ${MARKETING_VERSION}版本(${isArxan})

apk連結
https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$apkDistFileName-$isArxan$apkExtFileName

下載載點
https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$apkDistFileName-$isArxan$apkExtFileName
QR CODE
https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$apkDistFileName-$isArxan.html

EOF

### ===========================================================
### 建立Json
mailSubject="${appDesc} ${scheme_name} ${envDesc}環境 ${MARKETING_VERSION}版本 $isArxa"
link1="apk連結：<br>https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$apkDistFileName-$isArxan$apkExtFileName<br><br>"
link2="下載載點：<br>https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$apkDistFileName-$isArxan$apkExtFileName<br><br>"
link3="QR CODE：<br>https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.html<br><br>"
cat > $s3cmdPath/$scheme_name-$isArxan.json <<EOF
{
  "Sender": "",
  "Recipient": "$Email",
  "Subject": "$mailSubject",
  "Body": "$link1$link2$link3"
}
EOF
### =========

### 上傳Hicloud===========================================================
if [ -n "$isHicloud" ]
then
    if [ $isHicloud == "Y" -o $isHicloud == "y" ]
    then
    # echo -e s3://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.ipa
        s3cmd put $s3cmdPath/$apkDistFileName-$isArxan$apkExtFileName s3://$HicloudBucket/$hicoludEnvDesc/$MARKETING_VERSION/$apkDistFileName-$isArxan$apkExtFileName -P
        s3cmd put $s3cmdPath/$scheme_name-$isArxan.html s3://$HicloudBucket/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.html -P
        echo -e "\n\n上傳Hicloud成功\n\n"
    else
        echo -e "\n\n不執行上傳Hicloud**********程序結束**********\n\n"
        exit 1
    fi
else
    echo -e "\n\n不執行上傳Hicloud**********程序結束**********\n\n"
    exit 1
fi
### ===========================================================


### 發送連結至信箱===========================================================
curl -s --request POST \
    -H "Content-Type:application/json" \
    -H "APIkey:03C6755E-1C43-4A22-9806-C9CB16660034" \
    https://es.allianz.com.tw/service/wsUtility/api/postemailBK \
    --data @$s3cmdPath/$scheme_name-$isArxan.json
echo -e "\n\n發送至${Email}成功，請至信箱檢查,若沒看到請至垃圾信件檢查.\n\n"
### ===========================================================
cd $platformPath
git checkout master
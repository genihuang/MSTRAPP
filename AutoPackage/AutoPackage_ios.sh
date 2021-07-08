function pause(){
        read -n 1 -p "$*" INP
        if [ "$INP" != "" ] ; then
                echo -ne '\b \n'
        fi
}
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
envCode=""
envDesc=""
hicoludEnvDesc=""
# isHicloud：是否上傳HiCloud
isHicloud=""
# isArxan:是否要混淆
isArxan=""
isAxanFlag=""
# Xcode 版本
xcodeVersion="12.2"
# projectDir：專案路徑
projectDir="/Users/aztl/Documents/Project/MSTRAPP"
# sourcePath：原始碼路徑
sourcePath=$projectDir"/MSTR/src/app"
environmentFilePath=$sourcePath"/environment"
configFilePath=$projectDir
bkFilePath=$projectDir"/File"
environmentFile="environment.ts"
configFile="config.xml"
environmentAutoFile="environment_Auto.ts"
configAutoFile="config_Auto.xml"
imagePath=""
imageBackPath=""
# platformPath：平台路徑
platformPath=$projectDir"/platforms/ios"
# xcworkspaceFileName：ios workspace name
xcworkspaceFileName="Health_Club_iOS.xcworkspace"
# archivePath：archive路徑
archivePath=""
# exportPath：匯出路徑
exportPath=""
# exportOptionsPlist Path
exportOptionsPlist=""
#ipaPath
ipaPath=""
ipaArxanPath=""
#Arxan Xcconfig File
arxanXconfigPreFileName="Pods-"
arxanXconfigFileName="Pods-Health_Club_iOS.release.xcconfig"
arxanXconfigPath="$platformPath/Pods/Target Support Files"
arxanGurdSpecPath="/Users/aztl/Documents/Arxan_Guardspec/Health/iOS/Guardspec"
# s3cmd Path
hicloudPath="/Users/aztl/Documents/hicloud/MSTR"
# 時間
date=`date '+%Y%m%d_%H%M%S'`

# MARKETING_VERSION：本次版本號
MARKETING_VERSION=""
# CURRENT_PROJECT_VERSION：Build 版本號
CURRENT_PROJECT_VERSION=""
# PRODUCT_BUNDLE_IDENTIFIER：Bundle Id
PRODUCT_BUNDLE_IDENTIFIER_BASE="tw.com.allianz.MSTR"
developmentTeam=""
appDesc=""
appDescBase="安聯ｅ智慧"

schemeNameBase="MSTR"
HicloudBucketBase="mstr"


cd $projectDir
git checkout main
git stash save
git stash clear
git clean -df
git pull
git fetch origin --tags --force

echo -e "\n*************\nCheck Git Log\n*************\n"
cd $projectDir
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
if [ -n "$env" ]
    then
    if [ $env = "1" ]
        then
        envCode="14"
        envDesc="Uat"
        hicoludEnvDesc="uat"
        scheme_name=$schemeNameBase"_UAT"
        appDesc=$appDescBase"_UAT"
        PRODUCT_BUNDLE_IDENTIFIER=$PRODUCT_BUNDLE_IDENTIFIER_BASE".UAT"
        HicloudBucket=$HicloudBucketBase"uat"
        developmentTeam="8PY49K88TN"
        echo "scheme_name="$scheme_name
    elif [ $env = "2" ]
        then
        envCode="15"
        envDesc="PreProd"
        hicoludEnvDesc="preprod"
        scheme_name=$schemeNameBase"_PREPROD"
        appDesc=$appDescBase"_PREPROD"
        PRODUCT_BUNDLE_IDENTIFIER=$PRODUCT_BUNDLE_IDENTIFIER_BASE".PREPROD"
        HicloudBucket=$HicloudBucketBase"uat"
        developmentTeam="8PY49K88TN"
        echo "scheme_name="$scheme_name
    elif [ $env = "3" ]
        then
        envCode="2"
        envDesc="Prod"
        scheme_name=$schemeNameBase
        appDesc=$appDescBase
        PRODUCT_BUNDLE_IDENTIFIER=$PRODUCT_BUNDLE_IDENTIFIER_BASE
        HicloudBucket=$HicloudBucketBase
        developmentTeam="8PY49K88TN"
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
echo "~~~~~~~~~~~~請輸入本次版本號~~~~~~~~~~~~~~~"
echo "範例：001"
# 讀取使用者輸入並存到變數裡
read InputPVersion
sleep 0.5
Pversion="$InputPVersion"
# 判讀使用者是否有輸入
if [ -n "$Pversion" ]
    then
    CURRENT_PROJECT_VERSION=$Pversion
    echo "CURRENT_PROJECT_VERSION="$CURRENT_PROJECT_VERSION
else
    echo "別不輸入好嗎？"
    exit 1
fi
### ===========================================================
### Xcode Version
echo "~~~~~~~~~~~~請輸入Xcode版本號~~~~~~~~~~~~~~~"
echo "範例：12.2"
echo "default:12.2"
# 讀取使用者輸入並存到變數裡
read InputXcodeVersion
sleep 0.5
# 判讀使用者是否有輸入
if [ -n "$InputXcodeVersion" ]
    then
    xcodeVersion=$InputXcodeVersion
    echo "XCode Verion="$xcodeVersion
fi
### ===========================================================
### 是否Arxan混淆===========================================================
echo "~~~~~~~~~~~~是否需要Arxan混淆~~~~~~~~~~~~~~~"
echo "範例：Y/N"
echo "default:N,MSTR未有混淆，僅有N，待叡揚完成後修改"
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
isAxanFlag="N"
isArxan="nonArxan"
### ===========================================================

### 上傳Hicloud===========================================================
echo "~~~~~~~~~~~~是否需要上傳至Hicloud~~~~~~~~~~~~~~~"
echo "範例：Y/N"
echo "default:N"
# 讀取使用者輸入並存到變數裡
read inputHicloud
sleep 0.5
isHicloud="$inputHicloud"
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
Email="$inputEmail"
# 判讀使用者是否有輸入
if [ -n "$inputEmail" ]
then
Email="$inputEmail"
else
Email="geni.huang@allianz.com.tw"
fi
echo "Email="$Email
### ===========================================================
#--- git checkout "v$MARKETING_VERSION"

### 備份/修改檔案(config.xml,environment.ts)===================================
#echo "\n\n" $environmentFilePath/$environmentFile
#echo "\n\n" $bkFilePath/$environmentAutoFile
#exit 1
### 備份原始檔案(未套用)
cp "$environmentFilePath/$environmentFile" "$bkFilePath/$environmentAutoFile"
cp "$configFilePath/$configFile" "$bkFilePath/$configAutoFile"
### 套用變數至environment.ts
cd $environmentFilePath
sed -i '' 's/%env%/'$envCode'/g' "$environmentFilePath/$environmentFile"
sed -i '' 's/%version%/'$MARKETING_VERSION'/g' "$environmentFilePath/$environmentFile"
### 套用變數至config.xml
sed -i '' 's/%BundleID%/'$PRODUCT_BUNDLE_IDENTIFIER'/g' "$configFilePath/$configFile"
sed -i '' 's/%Version%/'$MARKETING_VERSION'/g' "$configFilePath/$configFile"
sed -i '' 's/%AppName%/'$appDesc'/g' "$configFilePath/$configFile"
sed -i '' 's/%SchemeName%/'$scheme_name'/g' "$configFilePath/$configFile"

cp "$environmentFilePath/$environmentFile" "$bkFilePath/$environmentFile"
cp "$configFilePath/$configFile" "$bkFilePath/$configFile"
### remove/add/build Platform
cordova platform rm ios
#cordova platform rm android
cordova platform add ios
#cordova platform add android
cordova prepare
#cordova build android

### 參數設定===========================================================
xcworkspaceFileName=$scheme_name".xcworkspace"
# archivePath 輸出archive
archivePath="$projectDir/Export/$envDesc/$scheme_name/$MARKETING_VERSION/$date/$scheme_name-$isArxan.xcarchive"
# archivePath="/Users/aztl/Documents/Project/HealthClub/Export/Uat/Health_Club_iOS/1.0.0.3/20210625_101511/$scheme_name-$isArxan.xcarchive"
# exportPath 輸出ipa
exportPath="$projectDir/Export/$envDesc/$scheme_name/$MARKETING_VERSION/$date"
#exportPath="/Users/aztl/Documents/Project/HealthClub/Export/Uat/Health_Club_iOS/1.0.0.3/20210625_101511"
# ipaPath
ipaPath="$exportPath/$scheme_name.ipa"
ipaArxanPath="$exportPath/$scheme_name-$isArxan.ipa"
# exportOptionPlist Path
exportOptionsPlist=$projectDir"/Export/$envDesc/ExportOptions.plist"
# imagePat
imagePath=$platformPath"/$scheme_name/Images.xcassets"
imageBackPath=$bkFilePath"/$envDesc/Images.xcassets"
# s3cmd Path
s3cmdPath="$hicloudPath/$envDesc/$MARKETING_VERSION"

### 複製圖片====================================================
cd $imagePath
rm -rfv $imagePath
cp -r $imageBackPath $imagePath 

### Arxan Copy xcconfig=======================================
if [ $isAxanFlag == "Y" ]
    then
    arxanXconfigFileName=$arxanXconfigPreFileName$scheme_name".release.xcconfig"
    arxanXconfigPath="$arxanXconfigPath/$arxanXconfigPreFileName$scheme_name"
    cd $arxanXconfigPath
    sed -i '' -n '1,/#ARXAN_S/p;/#ARXAN_E/,$p' $arxanXconfigPath/$arxanXconfigFileName
    sed -i '' '/ARXAN_S/G' $arxanXconfigPath/$arxanXconfigFileName
    sed -i '' '/#ARXAN_S/a\
    #include "Guardspec/EnsureIT.Protection.xcconfig"'  $arxanXconfigPath/$arxanXconfigFileName
    #\cp -r "$projectDir/File/$envDesc/$arxanXconfigFileName" "$arxanXconfigPath/$arxanXconfigFileName"
    \cp -r "$arxanGurdSpecPath" "$platformPath"
fi

### ====
### Xcode版本設定===========================================================
echo -e "\n\nXcode版本版本設定"
echo 'aztl888' | sudo -S xcode-select --switch /Applications/Xcode_$xcodeVersion.app
### ===========================================================
cd $platformPath
xcodebuild clean -workspace $platformPath/$xcworkspaceFileName \
-scheme $scheme_name \
-configuration Release

xcodebuild archive -workspace $platformPath/$xcworkspaceFileName \
-archivePath $archivePath \
-scheme $scheme_name \
-configuration Release \
-allowProvisioningUpdates \
CODE_SIGN_IDENTITY="Apple Development" \
CODE_SIGN_STYLE="Automatic" \
DEVELOPMENT_TEAM=$developmentTeam \
PROVISIONING_PROFILE_SPECIFIER="" \
MARKETING_VERSION=$MARKETING_VERSION \
CURRENT_PROJECT_VERSION=$CURRENT_PROJECT_VERSION \
#PRODUCT_BUNDLE_IDENTIFIER=$PRODUCT_BUNDLE_IDENTIFIER \ 
# Discover因為project專案內有其他project專案故不可輸入

#  檢查是否archive成功
#  xcarchive 是文件夾需用-d
if [ -d "$archivePath" ]
then
cp "$bkFilePath/$environmentAutoFile" "$environmentFilePath/$environmentFile"
cp "$bkFilePath/$configAutoFile" "$configFilePath/$configFile"
    echo -e "\n\narchive成功\n\n"
else
    echo -e "\n\narchive失敗\n\n"
    exit 1
fi

xcodebuild  -exportArchive \
-archivePath $archivePath \
-exportPath $exportPath \
-exportOptionsPlist $exportOptionsPlist \
-allowProvisioningUpdates

# 檢查ipa文件是否存在
if [ -f "$ipaPath" ]
then
    echo -e "\n\n exportArchive成功\n\n"
    # 修改ipa檔案名稱
    mv $ipaPath $ipaArxanPath
else
    echo -e "\n\n exportArchive失敗\n\n"
    exit 1
fi

### 檔案搬移至s3cmd資料夾===========================================================
# 指定輸出資料夾不存在則創建
if [ -d "$s3cmdPath" ] 
then
    echo -e "\n\n資料夾存在，執行ipa搬移"
else
    echo -e "\n\n資料夾不存在，建立新資料夾並執行ipa搬移"
    mkdir -pv $s3cmdPath
fi

# 複製ipa到s3cmd目錄
cp "$ipaArxanPath" "$s3cmdPath"
# 檢查s3cmd目錄ipa檔案是否存在
if [ -f "$ipaArxanPath" ]
then
    echo -e "\n\n移動至s3cmd成功\n\n"
    open $s3cmdPath
else
    echo -e "\n\n移動至s3cmd失敗\n\n"
    exit 1
fi

### 建立plist===========================================================
cat > $s3cmdPath/$scheme_name-$isArxan.plist <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>items</key>
	<array>
		<dict>
			<key>assets</key>
			<array>
				<dict>
					<key>kind</key>
					<string>software-package</string>
                    <key>url</key>
					<string>https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.ipa</string>
                </dict>
			</array>
			<key>metadata</key>
			<dict>
				<key>bundle-identifier</key>
				<string>$PRODUCT_BUNDLE_IDENTIFIER</string>
				<key>bundle-version</key>
				<string>$MARKETING_VERSION</string>
				<key>kind</key>
				<string>software</string>
				<key>title</key>
				<string>安聯 i 健康</string>
			</dict>
		</dict>
	</array>
</dict>
</plist>
EOF
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
	<div>${appDesc} ${scheme_name} ${envDesc}環境 ${MARKETING_VERSION}版本(${CURRENT_PROJECT_VERSION}) $isArxan</div>
	<div id="qrcode" style="width:300px; height:300px; margin-top:15px;"></div>
	<script type="text/javascript">
		var qrcode = new QRCode(document.getElementById("qrcode"), {
			width: 300,
			height: 300
		});
		function makeCode() {
			var elText = document.getElementById("text");
			qrcode.makeCode("itms-services://?action=download-manifest&url=https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.plist");
		}
		makeCode();
	</script>
</body>

EOF
### ===========================================================

### 建立Email===========================================================
cat > $s3cmdPath/$scheme_name-$isArxan.txt <<EOF
Subject: ${appDesc} ${scheme_name} ${envDesc}環境 ${MARKETING_VERSION}版本(${isArxan})

ipa連結
https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.ipa

下載載點
itms-services://?action=download-manifest&url=https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.plist
QR CODE
https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.html

EOF
### ===========================================================

### 建立Json
mailSubject="${appDesc} ${scheme_name} ${envDesc}環境 ${MARKETING_VERSION}版本 $isArxa"
link1="apk連結：<br>https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.ipa<br><br>"
link2="下載載點：<br>itms-services://?action=download-manifest&url=https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.plist<br><br>"
link3="QR CODE：<br>https://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.html<br><br>"
cat > $s3cmdPath/$scheme_name-$isArxan.json <<EOF
{
    "Sender":"",
    "Recipient":"$Email",
    "Subject":"$mailSubject",
    "Body":"$link1$link2$link3"
}
EOF
### =========

### 上傳Hicloud===========================================================
if [ -n "$isHicloud" ]
then
    if [ $isHicloud == "Y" -o $isHicloud == "y" ]
    then
    # echo -e s3://$HicloudBucket.s3.hicloud.net.tw/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.ipa
        s3cmd put $s3cmdPath/$scheme_name-$isArxan.ipa s3://$HicloudBucket/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.ipa -P
        s3cmd put $s3cmdPath/$scheme_name-$isArxan.plist s3://$HicloudBucket/$hicoludEnvDesc/$MARKETING_VERSION/$scheme_name-$isArxan.plist -P
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
git checkout main
#カスタマイズについて

##全体
･カスタムフィールドなど基本部分はsite2016のをベースに作成


##組み込みjs
･aタグを消す
https://developer.a-blogcms.jp/document/reference/builtinjs/#viewing



##グローバル変数の拡張
https://developer.a-blogcms.jp/blog/acmscamp/globalvars.html

/**
 * グローバル変数の拡張
 *
 * @param array $globalVars
 */
public function extendsGlobalVars(&$globalVars)
{
    // $globalVars->set('key', 'var');
    if( BID ){
        $Field = loadBlogField(BID);
        $globalVars->setField('FIELD_LAYOUT_TOP',$Field->get('layoutTop') );
    }

    if( CID ){
        $Field = loadCategoryField(CID);
        $globalVars->setField('FIELD_LAYOUT_INDEX',$Field->get('layoutIndex') );
        $globalVars->setField('FIELD_LAYOUT_ENTRY',$Field->get('layoutEntry') );
    }
}


#データのインポート
https://developer.a-blogcms.jp/document/datamanagement/blogImport.html

テーマ内の下記に置いています。
bin/starterkit/starterkit.yaml
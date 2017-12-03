
# デモサイト

<a href="http://starterkit.masizime.com/" target="_blank">http://starterkit.masizime.com/</a>


# カスタマイズについて

## 全体

カスタムフィールドなど基本部分はsite2016のをベースに作成


##組み込みjs

<a href="https://developer.a-blogcms.jp/document/reference/builtinjs/#viewing" target="_blank">https://developer.a-blogcms.jp/document/reference/builtinjs/#viewing</a>






## グローバル変数の拡張

<a href="https://developer.a-blogcms.jp/blog/acmscamp/globalvars.html" target="_blank">https://developer.a-blogcms.jp/blog/acmscamp/globalvars.html</a>

```
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
```

## データのインポート

<a href="https://developer.a-blogcms.jp/document/datamanagement/blogImport.html" target="_blank">https://developer.a-blogcms.jp/document/datamanagement/blogImport.html</a>


テーマ内の下記に配置

```
bin/starterkit/starterkit.yaml
```
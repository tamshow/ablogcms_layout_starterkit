$(function () {
  /*
   *
   * バリデーションを追加するformタグに`#js-validation-form`を付与
   * submitに離脱防止アラートを一部無効にしたい場合に `.js-edit-submit`を付与
   *
   * memo
   * 残り必須項目表示

   * */


  //残り必須項目表示
  //========================
  $('body').prepend(
      '<div class="e-required-countdown-group">' +
      '<div class="e-required-countdown-group__inner">' +
      '<p class="e-required-countdown-group__text">フォームの入力<br class="is-hidden--sm">必須項目の残りは</p>' +
      '<p class="e-required-countdown-group__num"></p>' +
      '</div>' +
      '</div>'
  );

  let $required = $('[data-form-required-count]');
  const requiredNum = $required.length;
  const validNum = $required.filter('.is-valid').length;
  const errorNum = requiredNum - validNum;
  $('.e-required-countdown-group__num').text(errorNum);

  //バリデート
  //========================
  $('#js-validation-form').validationEngine('attach', {
    validateNonVisibleFields: true,
    validationEventTrigger: "blur keyup",
    scroll: true,
    promptPosition: "bottomLeft",
    showArrowOnRadioAndCheckbox: true,
    autoPositionUpdate: true,
    onFieldSuccess() {
      formMessageBox()
    },
    onFieldFailure() {
      formMessageBox()
    },
    addSuccessCssClassToField: "is-valid",
    addFailureCssClassToField: "is-error",
    autoHidePrompt: true,
    autoHideDelay: 2000,
    fadeDuration: 2000,
    showOneMessage: true,
    scrollOffset: 100
  });

  function formMessageBox() {
    const validNum = $required.filter('.is-valid').length;
    const errorNum = requiredNum - validNum;
    $('.e-required-countdown-group__num').text(errorNum);
    $(".is-valid").parents('.e-form-field').find('.e-form-message-box').css({'display': 'none'});
    $(".is-error").parents('.e-form-field').find('.e-form-message-box').css({'display': 'inline-block'});
    (errorNum === 0) ? $('.e-required-countdown-group').css({'display': 'none'}) : $('.e-required-countdown-group').css({'display': 'block'});
  }

  //離脱アラート
  //========================

  if ($('#js-validation-form').length) {
    // submitに離脱防止アラートを無効に
    $('.js-edit-submit').attr({
      'data-form-not-beforeunload': ''
    });

    $(window).on('beforeunload', () => "フォームは未送信です。\n" +
    "このままページを移動するとフォームに入力したデータは保存されません。");

    $('[data-form-not-beforeunload]').on('click', e => {
      $(window).off('beforeunload');
    });
  }

});
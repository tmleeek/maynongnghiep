<?php
class Smartwave_QuickView_Block_TopJs extends Mage_Page_Block_Html
{
    public function _prepareLayout()
    {
        if (!Mage::getStoreConfig('quickview/general/enableview')) return;
        $layout = $this->getLayout();
        $head = $layout->getBlock('head');
        if (is_object($head)) {
            $head->addJs('varien/product.js');
            $head->addJs('varien/configurable.js');
            $head->addJs('calendar/calendar.js');
            $head->addJs('calendar/calendar-setup.js');
            $head->addItem('skin_js', 'js/bundle.js');
            $head->addItem('skin_js', 'quickview/js/sw_quickview.js');
            $head->addItem('js_css', 'calendar/calendar-win2k-1.css');
            $head->addItem('skin_css', 'quickview/css/styles.css');            
        }
        $this->setTemplate('smartwave/quickview/page/lablequickview.phtml');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and contents
            document.querySelector('.tab.tab_active').classList.remove('tab_active');
            document.querySelector('.tab__content.tab__content_active').classList.remove('tab__content_active');

            // Activate selected tab and corresponding content
            tab.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        });
    });
});
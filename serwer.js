function buyCard(amount){
    let count = parseInt(localStorage.getItem('usageCount') || 0);

    // سقف استفاده فعلی 2000
    const maxUsage = 20;

    // هر بار خرید، فقط 20 استفاده اضافه شود، نه همه کارت
    count = Math.min(count + 20, amount); 

    localStorage.setItem('usageCount', count);
    alert(`خرید موفق! شما اکنون ${count} بار استفاده می‌توانید داشته باشید.`);
    showPage('main');
    updateUsage();
}

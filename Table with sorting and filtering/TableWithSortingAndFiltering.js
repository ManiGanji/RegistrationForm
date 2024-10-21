$(document).ready(function() {
    var table = $('#productTable').DataTable({
        "order": [[0, "asc"]], // Sort by the first column (Product Name) in ascending order by default
        "pageLength": 5, // Show 5 entries per page
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]], // Options for number of entries per page
        "pagingType": "simple_numbers", // Use simple numbers for pagination
        "info": true, // Show info about current page and total entries
        "language": {
            "info": "Showing _START_ to _END_ of _TOTAL_ entries",
            "infoEmpty": "Showing 0 to 0 of 0 entries",
            "infoFiltered": "(filtered from _MAX_ total entries)",
            "lengthMenu": "Show _MENU_ entries",
            "search": "Search:",
            "zeroRecords": "No matching records found",
            "paginate": {
                "next": "Next",
                "previous": "Previous"
            }
        }
    });

    // Add sorting icons
    $('#productTable thead th').each(function (index) {
        $(this).on('click', function () {
            updateSortingIcons(index);
        });
    });

    function updateSortingIcons(clickedColumnIndex) {
        $('#productTable thead th').each(function (index) {
            var icons = $(this).find('.sorting-icons i');
            if (index === clickedColumnIndex) {
                var sortOrder = table.order()[0][1];
                icons.removeClass('active');
                if (sortOrder === 'asc') {
                    icons.filter('.fa-caret-up').addClass('active');
                } else {
                    icons.filter('.fa-caret-down').addClass('active');
                }
            } else {
                icons.removeClass('active');
            }
        });
    }

    // Initialize sorting icons
    updateSortingIcons(0);
});

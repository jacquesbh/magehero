$(document).ready(function() {
    MageHero_App.bindUpvote();
    $('table.listing').tablesorter({
        headers: {
            0: { sorter: false },
            2: { sorter: false },
            4: { sorter: false },
            8: { sorter: false }
        },
        textExtraction: function(cell) {
            var votes = $(cell).find('.vote-count');
            if (votes.length) {
                return votes.text();
            }
            return $(cell).text();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Nothing yet
});

MageHero_App = {
    bindUpvote: function() {
        var self = this;

        $('.upvote a').click(function() {
            var userId = $(this).closest('tr').attr('data-user-id');
            var upvoteCount = $(this).closest('.upvote').find('.vote-count')

            $.ajax({
                url: '/user/' + userId + '/upvote',
                method: 'GET',
                success: function(data) {
                    console.log(data);
                    if (! data.success) {
                        alert(data.message);
                        return;
                    }

                    upvoteCount.text(data.vote_count).show();
                }
            });
        });

        return this;
    }
};


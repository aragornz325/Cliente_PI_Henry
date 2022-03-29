
export function removeOptions ($select) {
    ('select option').prop('selected', function() {
        return this.defaultSelected;
    });
};


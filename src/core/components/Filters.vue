<template>
  <v-sheet
      color="grey lighten-3"
      class="sheet-height"
  >
    <div class="text-h6 px-2 py-3">Refinar búsqueda</div>
    <div v-for="(item, index) in items" :key="'filters'+index">
      <div>{{ item.name }}</div>
      <template v-for="(filter, i) in item.filters">
        <template v-if="filter.type === 'check'">
          <div :key="'filter'+i" class="d-flex justify-space-between">
            <div class="d-flex">
              <v-checkbox
                  :disabled="filter.disabled"
                  :label="filter.name"
                  @change="() => changed(index, i, filter.value)"
                  class="mt-0 ml-0 AsideBar-checkbox"
                  color="primary"
                  v-model="filter.value"
              ></v-checkbox>
            </div>
            <span class="caption">{{ filter.dataFiltered }}</span>
          </div>
        </template>
        <template v-if="filter.type === 'date'">
          <div :key="'filter'+i" class="d-flex justify-space-between">
            <div class="d-flex py-3">
              <v-menu
                  :close-on-content-click="false"
                  :ref="`menu-${index}-${i}`"
                  min-width="290px"
                  offset-y
                  transition="scale-transition"
                  :return-value.sync="filter.value"
                  v-model="filter.isCalendarOpen"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                      append-icon="mdi-calendar"
                      class="input-control-color"
                      :label="filter.name"
                      outlined
                      readonly
                      dense
                      hide-details
                      v-model="filter.value"
                      v-on="on"
                      clearable
                      @click:clear="changed(index, i, null, `menu-${index}-${i}`)"
                  ></v-text-field>
                </template>
                <v-date-picker
                    no-title
                    scrollable
                    v-model="filter.value"
                    :min="filter.minDate"
                    :max="filter.maxDate"
                    @input="changed(index, i, filter.value,  `menu-${index}-${i}`)"
                ></v-date-picker>
              </v-menu>
            </div>
          </div>
        </template>
        <template v-if="filter.type === 'dateRange'">
          <div :key="'filter'+i" class="d-flex justify-space-between">
            <div class="d-flex">
              <v-menu
                  :close-on-content-click="false"
                  :return-value.sync="filter.value"
                  min-width="290px"
                  offset-y
                  ref="dateFromMenu"
                  transition="scale-transition"
                  v-model="dateFromMenu"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                      append-icon="mdi-calendar"
                      label="Desde"
                      outlined
                      readonly
                      v-model="filter.value"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    @input="changed(index, i, filter.value)"
                    no-title
                    range
                    scrollable
                    v-model="filter.value"
                >
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text>Cancel</v-btn>
                  <v-btn @click="changed(index, i, filter.value)" color="primary" text>OK</v-btn>
                </v-date-picker>
              </v-menu>
            </div>
          </div>
        </template>
        <template v-if="filter.type === 'radio'">
          <div :key="'filter'+i">
            <div class="d-flex justify-space-between align-center">
              <span class="subtitle-1">{{ filter.name }}</span>
              <span class="caption">{{ filter.dataFiltered }}</span>
            </div>
            <v-radio-group
                @change="() => changed(index, i, filter.value)"
                class="mt-0"
                v-model="filter.value"
            >
              <v-radio
                  :key="'radio'+i"
                  :label="radio.name"
                  :value="radio.value"
                  color="primary"
                  v-for="(radio, i) in filter.radios"
              ></v-radio>
            </v-radio-group>
          </div>
        </template>
        <template v-if="filter.type === 'range'">
          <div :key="'filter'+i">
            <div class="d-flex justify-space-between align-center">
              <span class="subtitle-1">{{ filter.name }}</span>
              <span class="caption">{{ filter.dataFiltered }}</span>
            </div>
            <div class="d-flex flex-column text-center" style="width: 100%">
              <v-slider
                  :max="filter.max"
                  :min="filter.min"
                  @change="() => changed(index, i, filter.value)"
                  color="primary"
                  hide-details
                  thumb-label
                  v-model="filter.value"
              ></v-slider>
            </div>
          </div>
        </template>
        <template v-if="filter.type === 'text'">
          <div :key="'filter'+i" class="d-flex justify-space-between">
            <div class="d-flex">
              <v-text-field
                  :label="filter.name"
                  @input="() => changed(index, i, filter.value)"
                  class="mt-0 ml-0"
                  clearable
                  outlined
                  v-model="filter.value"
              ></v-text-field>
            </div>
          </div>
        </template>
        <template v-if="filter.type === 'select'">
          <div :key="'filter'+i" class="d-flex justify-space-between">
            <div class="d-flex py-3">
              <v-select
                  :items="filter.items"
                  :label="filter.name"
                  @change="() => changed(index, i, filter.value)"
                  class="input-control-color"
                  hide-details
                  dense
                  outlined
                  v-model="filter.value"
              ></v-select>
            </div>
          </div>
        </template>
        <template v-if="filter.type === 'autocomplete'">
          <div :key="'filter'+i" class="d-flex justify-space-between">
            <div class="d-flex py-3">
              <v-autocomplete
                  v-model="filter.value"
                  :items="filter.items"
                  :label="filter.name"
                  @change="() => changed(index, i, filter.value)"
                  hide-details
                  dense
                  class="input-control-color"
                  :clearable="filter.clearable"
                  :multiple="filter.multiple"
                  outlined
              >
                <template v-slot:item="data">
                  <v-list-item-action v-if="filter.multiple">
                    <v-checkbox
                        color="primary"
                        :value="data.attrs.inputValue"
                        readonly
                    ></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.text }}</v-list-item-title>
                    <v-list-item-subtitle v-if="data.item.description">{{ data.item.description }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </div>
          </div>
        </template>
      </template>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    items: Array
  },
  methods: {
    changed(parent, filter, value, ref = null) {
      if (this.items[parent].filters.some(item => item.type == 'check')) {
        const filtered = this.items[parent].filters.filter(item => item.value == true);

        if(filtered.length == 1) filtered[0].disabled = true;
        else filtered.forEach(item => item.disabled = false);
      }
      this.$emit('changed', parent, filter, value);
      if (ref) this.$refs[ref][0].save(value)
    },
  }
}
</script>

<style lang="sass" scoped>

  .input-control-color
    background-color: white

  .sheet-height
    min-height: calc(100vh - 57px)
</style>

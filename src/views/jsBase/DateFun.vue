<template>
  <div>
    <p>Date基础</p>
  </div>
</template>
<script>
import moment from "moment";

console.log(moment().format("YYYY-MM-DD"));
export default {
  name: "DateFun",
  data() {
    return {};
  },
  components: {},
  created() {
    /**
     * Date
     *
     * 1970年1月1日（UTC）起经过的毫秒数。
     *
     * 语法
     * new Date();
     * new Date(value);
     * new Date(dateString);
     * new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
     *
     * @params new new Date(): 创建时刻的日期和时间
     * @params value:Unix时间戳
     * @params dateString:时间戳字符串，能被Date.parse()识别
     * @params 多个参数:Date.length，长度为7，可接受的参数个数
     *
     * year：年份，monthIndex：月份 0-11 0表示1月份，date：一个月中的第几天的整数值，从1开始。默认值为1
     * hours ：一天中的小时数的整数值 (24小时制)。默认值为0（午夜）
     * minutes ：分钟部分的整数值。默认值为0。
     * seconds ：秒部分的整数值。默认值为0。
     * milliseconds ：表示一个完整时间的毫秒部分的整数值。默认值为0。
     *
     * 当Date作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。比如 new Date(2013, 13, 1)等于new Date(2014, * 1, 1)，它们都表示日期2014-02-01（注意月份是从0开始的）。其他数值也是类似，new Date(2013, 2, 1, 0, 70)等于new Date(2013, 2, 1, 1, 10)，都表示同一个时间：
     * 2013-03-01T01:10:00。
     *
     * 当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要使用世界协调时 UTC，使用 new Date(Date.UTC(...)) 和相同参数
     *
     * */

    /**
     * Date方法
     *
     * */
    // Date.now(); //  自 1970-1-1 00:00:00  UTC（世界标准时间）至今所经过的毫秒数。
    // console.log("Date.now()", Date.now()); // 1650598266647
    // Date.parse(); //  解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数
    // console.log("Date.parse()", Date.parse("Dec 25, 1995")); // 1650598266647

    /**
     * Date.UTC();
     * Date.UTC(year,month[,date[,hrs[,min[,sec[,ms]]]]])
     * @param year 1900 年后的某一年份。
     * @param month 0 到 11 之间的一个整数，表示月份。
     * @param date 1 到 31 之间的一个整数，表示某月当中的第几天。
     * @param hrs 0 到 23 之间的一个整数，表示小时。
     * @param min 0 到 59 之间的一个整数，表示分钟。
     * @param sec 0 到 59 之间的一个整数，表示秒。
     * @param ms 0 到 999 之间的一个整数，表示毫秒
     * 接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。
     *
     * */
    // const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
    // const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

    // console.log(utcDate1.toUTCString());
    // // Fri, 02 Feb 1996 03:04:05 GMT

    // console.log(utcDate2.toUTCString());
    // // Sun, 31 Dec 1899 00:00:00 GMT

    /**
     * JavaScript Date 实例
     *
     * */
    let nowDate = new Date();

    /**
     * 通用方法
     *
     * */

    // console.log(nowDate.toDateString()); // 以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。
    // console.log(nowDate.toISOString()); // 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。
    // console.log(nowDate.toJSON()); // 返回 Date 对象的字符串形式

    // /**
    //  * toLocaleDateString
    //  * 返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现
    //  * （behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。
    //  *
    //  * */
    // const options = {
    //   weekday: "long",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // };
    // console.log(nowDate.toLocaleDateString("de-DE", options));

    /**
     * toLocaleString
     * 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则
     * 允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。
     *
     * */
    // console.log(nowDate.toLocaleString("en-GB", { timeZone: "UTC" }));

    /**
     * toLocaleTimeString
     * 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则
     * 允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。
     *
     * */
    // console.log(nowDate.toLocaleTimeString("en-US"));

    // console.log(nowDate.toString()); // 返回一个字符串，表示该Date对象。

    // console.log(nowDate.toTimeString()); // 以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。

    // console.log(nowDate.toUTCString()); // 把一个日期转换为一个字符串，使用UTC时区。

    /**
     * valueOf() 方法返回一个 Date 对象的原始值。
     *
     * */
    // const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
    // console.log(date1.valueOf()); // 823230245000
    // const date2 = new Date("02 Feb 1996 03:04:05 GMT");
    // console.log(date2.valueOf()); // 823230245000

    /**
     * 时间操作相关的get方法
     *
     * */
    // console.log(nowDate.getDate()); // 获取月份的某天
    // console.log(nowDate.getDay()); // 一周的第几天，0 表示星期天
    // console.log(nowDate.getFullYear()); // 取代getyear(),获取年份
    // console.log(nowDate.getHours()); // 一个指定的日期对象的小时
    // console.log(nowDate.getMilliseconds()); // 指定的日期对象的毫秒数
    // console.log(nowDate.getMinutes()); // 日期对象的分钟数。
    // console.log(nowDate.getMonth()); // 指定的日期对象的月份，为基于0的值（0表示一年中的第一月）
    // console.log(nowDate.getSeconds()); // 指定的日期对象的秒数
    // console.log(nowDate.getTime()); // 表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
    // console.log(nowDate.getTimezoneOffset()); // 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。

    /**
     * 以世界时为标准获取时间
     *
     * */

    // console.log(nowDate.getUTCDate()); // 以世界时为标准，返回一个指定的日期对象为一个月中的第几天
    // console.log(nowDate.getUTCDay()); // 以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。
    // console.log(nowDate.getUTCFullYear()); // 以世界时为标准，返回一个指定的日期对象的年份。
    // console.log(nowDate.getUTCHours()); // 以世界时为标准，返回一个指定的日期对象的小时数。
    // console.log(nowDate.getUTCMilliseconds()); // 以世界时为标准，返回一个指定的日期对象的毫秒数。
    // console.log(nowDate.getUTCMinutes()); // 以世界时为标准，返回一个指定的日期对象的分钟数。
    // console.log(nowDate.getUTCMonth()); // 以世界时为标准，返回一个指定的日期对象的月份，它是从 0 开始计数的（0 代表一年的第一个月）。
    // console.log(nowDate.getUTCSeconds()); // 以世界时为标准，返回一个指定的日期对象的秒数。

    /**
     * 时间操作相关的设置set时间
     *
     * */
    // console.log(nowDate.setDate(24)); // 获取月份的某天
    // console.log(nowDate.setTime(12)); // 表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
    // console.log(nowDate.setHours(12)); // 根据本地时间为一个日期对象设置小时数，返回从1970-01-01 00:00:00 UTC 到更新后的 日期 对象实例所表示时间的毫秒数。
    // console.log(nowDate.setMilliseconds(456)); // 根据本地时间设置一个日期对象的豪秒数。
    // console.log(nowDate.setMinutes(40)); // 根据本地时间为一个日期对象设置分钟数。
    // console.log(nowDate.setMonth(3)); // 根据本地时间为一个设置年份的日期对象设置月份。
    // console.log(nowDate.setSeconds(3)); // 根据本地时间设置一个日期对象的秒数。
    // console.log(nowDate.setTime(new Date().getTime())); // 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。
    // console.log(nowDate.setTime(new Date().getTime())); // 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。

    /**
     * 以世界时为标准设置set时间
     *
     * */

    // console.log(nowDate.setUTCDate(19)); // 根据全球时间设置特定date对象的日期。
    // console.log(nowDate.setUTCFullYear(1975)); // 根据世界标准时间为一个具体日期设置年份
    // console.log(nowDate.setUTCHours(23)); // 根据世界标准时间为一个具体日期设置小时数,返回从1970-01-01 00:00:00 UTC 到更新后的 日期 对象实例所表示时间的毫秒数。
    // console.log(nowDate.setUTCMilliseconds(420)); // 根据世界时来设置指定时间的毫秒数。
    // console.log(nowDate.setUTCMinutes(25)); // 根据世界协调时（UTC）来设置指定日期的分钟数。
    // console.log(nowDate.setUTCMonth(11)); // 根据世界协调时（UTC）来设置设置一个准确的月份
    // console.log(nowDate.setUTCSeconds(39)); // 根据世界协调时（UTC）来设置设置一个设置秒数
  },
};
</script>
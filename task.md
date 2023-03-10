# ![Logo](./docs/svg/UK_logo_white.svg)

## Algorithms task

```
This repository contains some basic setup for scripting in nodejs.
```

There are 3 files in the `data` directory.

```
 1. users.json
 2. mobile_devices.json
 3. iot_devices.json
```

Each one of them contains an array of records.

### Users

`users.json` file records have two properties:

| Key  | Type     |
| ---- | -------- |
| id   | `uuid`   |
| name | `string` |

Each name is in fact a name + number suffix in the following pattern:

```
{ NAME } - { number }

{ NAME } part could be one of the following:
```

| Name   |
| ------ |
| Alice  |
| Bob    |
| Martin |
| Henry  |
| Olaf   |

As a result, user names could be:

```
`Olaf - 3`
`Alice - 12`
`Martin - 310`
```

### Mobile devices

Each user has a record of using multiple mobile devices (phones, tablets, etc.).

`mobile_devices.json` file records have three properties:

| Key  | Type     |
| ---- | -------- |
| id   | `uuid`   |
| name | `string` |
| user | `uuid`   |

### IoT devices

Each mobile device has a record of paired IoT devices

`iot_devices.json` file records have three properties:

| Key    | Type     |
| ------ | -------- |
| id     | `uuid`   |
| name   | `string` |
| mobile | `uuid`   |

## The task

`Your task is to count how many IoT devices have been ever owned by users with the same name.`

**Example:**

```
'Alice' => 12,
'Bob' => 10,
'Martin' => 3,
 ...
```

**Description:**

```
- All users named Alice owned 12 devices in total,
- All users named Bob owned 10 devices in total
- All users named Martin owned 3 devices in total
- ...
```

For simplicity, you can assume that a single IoT device has been paired with a single mobile device only.

## Tips

```
> You can run `yarn generate` to generate a different dataset. Use `.env` values to determine the dataset size.

> You can run `yarn start` to test your solution
```
